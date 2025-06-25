import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Platform,
  Alert,
  PermissionsAndroid,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { hp, wp } from '../../enums/styleGuide';

const audioRecorderPlayer = new AudioRecorderPlayer();

const CustomChat = (props:any) => {
  const {navigation} =props
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [selectedIds, setSelectedIds] = useState([]);
  const [isRecording, setIsRecording] = useState(false);

  const requestPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'Microphone Permission',
        message: 'App needs access to your microphone to send voice messages.',
        buttonPositive: 'OK',
        buttonNegative: 'Cancel',
      }
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  };

  const handleStartRecording = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return;

    setIsRecording(true);
    await audioRecorderPlayer.startRecorder();
  };

  const handleStopRecording = async () => {
    if (!isRecording) return;
    const result = await audioRecorderPlayer.stopRecorder();
    setIsRecording(false);

    const voiceMessage = {
      id: Date.now().toString(),
      text: '🎤 Voice message recorded:\n' + result,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [voiceMessage, ...prev]);

    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Got your voice message! 🎧',
        sender: 'other',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [botMessage, ...prev]);
    }, 1000);
  };

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const now = new Date();
    const userMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'me',
      time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [userMessage, ...prev]);

    const userText = inputText.trim().toLowerCase();
    setInputText('');

    setTimeout(() => {
      let botReply = 'Sorry, I did not understand that.';
      if (userText.includes('hello')) botReply = 'Hi there!';
      else if (userText.includes('how are you')) botReply = 'I’m great, thanks! 🤖';
      else if (userText.includes('bye')) botReply = 'Goodbye!';
      else if (userText.includes('thanks')) botReply = 'You’re welcome!';
      else if (userText.includes('who are you')) botReply = 'I’m a helpful bot.';

      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: botReply,
        sender: 'other',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [botMessage, ...prev]);
    }, 1000);
  };

  const toggleSelection = id => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(msgId => msgId !== id) : [...prev, id]
    );
  };

  const handleLongPress = id => {
    if (!selectedIds.includes(id)) setSelectedIds([id]);
  };

  const handleDeleteSelected = () => {
    if (!selectedIds.length) return;
    Alert.alert(
      'Delete',
      `Delete ${selectedIds.length} messages?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setMessages(prev =>
              prev.filter(msg => !selectedIds.includes(msg.id))
            );
            setSelectedIds([]);
          },
        },
      ],
      { cancelable: true }
    );
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedIds.includes(item.id);
    return (
      <TouchableOpacity
        onLongPress={() => handleLongPress(item.id)}
        onPress={() => {
          if (selectedIds.length > 0) toggleSelection(item.id);
        }}
      >
        <View
          style={[
            styles.messageBubble,
            item.sender === 'me' ? styles.myMessage : styles.otherMessage,
            isSelected && styles.selectedMessage,
          ]}
        >
          <Text style={styles.messageText}>{item.text}</Text>
          {item.time && <Text style={styles.messageTime}>{item.time}</Text>}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.topBanner}>
           <TouchableOpacity 
          onPress={()=>navigation.navigate("timeExpires")}
          
          style={{width:wp(60),height:hp(4),alignSelf:"center",backgroundColor:"grey",borderRadius:100,marginTop:"1%",justifyContent:"center"}}>
            <Text style={{alignSelf:"center",color:"#FFFFFF",fontSize:wp(4),fontWeight:"700"}}>Next</Text>
          </TouchableOpacity>
          <Text style={styles.topBannerText}>Group Chat</Text>
         
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/group.png')}
              style={{ width: wp(55), height: wp(11.5), marginTop: wp(3) }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.chatContainer}>
          {selectedIds.length > 0 && (
            <View style={styles.deleteBar}>
              <Text style={styles.deleteCount}>{selectedIds.length} selected</Text>
              <TouchableOpacity onPress={handleDeleteSelected}>
                <Image
                  source={require('../../assets/icons/delete.png')}
                  style={{ width: 23, height: 23, tintColor: '#FFFFFF' }}
                />
              </TouchableOpacity>
            </View>
          )}

          <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            inverted
            contentContainerStyle={{ padding: 10 }}
          />

          {isRecording && (
            <View style={styles.recordingIndicator}>
              <Text style={styles.recordingText}>🎙️ Recording...</Text>
            </View>
          )}

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Type a message..."
              placeholderTextColor="#aaa"
            />
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require('../../assets/icons/akar.png')}
                style={{ width: 22, height: 22 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPressIn={handleStartRecording}
              onPressOut={handleStopRecording}
              style={styles.iconButton}
            >
              <Image
                source={require('../../assets/icons/voice.png')}
                style={{ width: 22, height: 22 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
              <View style={{ width: 36, height: 40, backgroundColor: '#9D0DC5', borderRadius: 10 }}>
                <Image
                  source={require('../../assets/icons/send.png')}
                  style={{ width: 20, height: 18, alignSelf: 'center', marginTop: wp(2.8) }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9D0DC5',
  },
  topBanner: {
    width: '100%',
    height: '23%',
    backgroundColor: '#9D0DC5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBannerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  deleteBar: {
    backgroundColor: '#9D0DC5',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  deleteCount: {
    color: 'white',
    fontSize: 16,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 4,
    maxWidth: '75%',
  },
  myMessage: {
    backgroundColor: '#9D0DC5',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: 'black',
    alignSelf: 'flex-start',
  },
  selectedMessage: {
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  messageText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  messageTime: {
    fontSize: 12,
    color: '#e0e0e0',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  recordingIndicator: {
    alignItems: 'center',
    marginBottom: 5,
  },
  recordingText: {
    color: '#E41BD8',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    margin: 22,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 25,
    fontSize: 16,
    color: '#000',
  },
  iconButton: {
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
