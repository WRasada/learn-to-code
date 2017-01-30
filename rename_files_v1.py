import os
import string

def rename_files():
    file_list = os.listdir("/Users/wesleyrasada/Desktop/UDACITY/prank")
    print(file_list)

    saved_path = os.getcwd()
    print("Current Working Directory is " + saved_path)
    os.chdir("/Users/wesleyrasada/Desktop/UDACITY/prank")

    for file_name in file_list:
        print("Old File_name = " + file_name)
        print("New File_name = " + file_name.translate(None, '0123456789'))
        os.rename(file_name, file_name.translate(None, '0123456789'))
    os.chdir(saved_path)

rename_files()
