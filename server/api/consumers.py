# filepath: /c:/Users/adity/OneDrive/Desktop/work/web6.0/server/api/consumers.py
#import json
#from channels.generic.websocket import WebsocketConsumer
#
#class FileConsumer(WebsocketConsumer):
#    def connect(self):
#        self.accept()
#        # Send data to the frontend upon connection
#        data = {
#            "message": "Hello from Django WebSocket!"
#        }
#        self.send(text_data=json.dumps(data))
#
#    def disconnect(self, close_code):
#        pass
#
#    def receive(self, text_data):
#        pass  # No need to handle incoming messages for one-way communication