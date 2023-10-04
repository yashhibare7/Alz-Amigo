import speech_recognition as sr
import pyttsx3
import pywhatkit
import datetime
import wikipedia
import pyjokes
import geocoder
import webbrowser
import pygame.camera

listener = sr.Recognizer()
engine = pyttsx3.init()
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[1].id)

def talk(text):
    engine.say(text)
    engine.runAndWait()

talk('Hello buddy , What can i help you')
def take_command():    
    try:
        with sr.Microphone() as source:
            print('listening...')
            voice = listener.listen(source)
            command = listener.recognize_google(voice)
            command =command.lower()
            if 'nova' in command:
                command = command.replace('nova', '')
                print(command)
    except:
        pass
    return command

def run_alexa():
    command =take_command()
    print(command)

    #play song on youtube
    if 'play' in command:
        song = command.replace('play', '')
        talk('playing' + song)
        pywhatkit.playonyt(song)

    #Current time    
    elif 'time' in command:
        time = datetime.datetime.now().strftime('%H:%M')
        print(time)
        talk('Current time is '+ time)

    #wikipedia answer    
    elif 'what is' in command:
        person = command.replace('See', '')
        info = wikipedia.summary(person, 2)
        print(info)
        talk(info)
    elif 'tell me' in command:
        person = command.replace('See', '')
        info = wikipedia.summary(person, 2)
        print(info)
        talk(info)
    elif 'who is' in command:
        person = command.replace('See', '')
        info = wikipedia.summary(person, 2)
        print(info)
        talk(info)

   
    #Joke
    elif 'joke' in command:
        print(pyjokes.get_joke())
        talk(pyjokes.get_joke())

    #current location    
    elif 'location' in command:
        g = geocoder.ip('me')
        print(g.city)
        talk('your current location is' + g.city)

    #memory game
    elif 'memory game' in command:
         webbrowser.open('http://localhost:3000/')





    #any command doesn't match nova talk this line
    else:
        talk('Please say the command again.')
    
while True:
    run_alexa()        