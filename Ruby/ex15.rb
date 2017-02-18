filename = ARGV.first

txt = open(filename)

puts "Here's your file #{filename}:"
print txt.read

txt.close()

print "Type the filename again: "
file_again = $stdin.gets.chomp

txt_again = open(file_again)

file = txt_again.read

print file

txt_again.close()
