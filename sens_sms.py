from twilio.rest import TwilioRestClient

account_sid = "ACc57737e3be267be501983a46db8be5e0" # Your Account SID from www.twilio.com/console
auth_token  = "772c5ad27464931486a7021959211d7e"  # Your Auth Token from www.twilio.com/console

client = TwilioRestClient(account_sid, auth_token)

message = client.messages.create(body="Hello from Python, my name is Wesley Rasada. =)",
    to="+15622298148",    # Replace with your phone number
    from_="+17148808579 ") # Replace with your Twilio number

print(message.sid)
