filename = ARGV.first

puts "We're going to erase #{filename}."
puts "If you don't want that, hit CTRL-C (^C)."
puts "If you want to continue with erasing #{filename}, hit RETURN/ENTER."

$stdin.gets

puts "Opening the file..."
target = open(filename, 'w+')

puts "Erasing the file. Goodbye!"
target.truncate(0)

puts "Now I'm going to ask you for three lines."

print "line 1: "
line1 = $stdin.gets.chomp
print "line 2: "
line2 = $stdin.gets.chomp
print "line 3: "
line3 = $stdin.gets.chomp

puts "I'm going to write these to the file."

target.write("#{line1}\n#{line2}\n#{line3}\n")

puts "And finally, we save and close the file."
puts "Thank you!"

puts "Would you like to read the file? CTRL-C to exit, otherwise hit ENTER."

$stdin.gets

puts "Opening #{filename}..."
target.rewind
print target.read

target.close
