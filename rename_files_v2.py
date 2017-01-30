import os
import string

def rename_files():
    file_list = os.listdir("/Users/wesleyrasada/Desktop/UDACITY/alphabet")
    saved_path = os.getcwd()
    print("Current working directory:" + saved_path)

    os.chdir("/Users/wesleyrasada/Desktop/UDACITY/alphabet")

    for file_name in file_list:
        print("Old filename: " + file_name)
        print("New filename: " + file_name.translate(None, '0123456789'))
        os.rename(file_name, file_name.translate(None, '0123456789'))

rename_files()
