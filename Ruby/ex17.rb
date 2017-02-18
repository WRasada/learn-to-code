from_file, to_file = ARGV

puts "Copying from #{from_file} to #{to_file}..."

old_file = open(from_file); data = old_file.read

puts "The input file is #{data.length} bytes long"

puts "Does the output file exist? #{File.exist?(to_file)}"
puts "Ready, hit ENTER to continue, CTRL-C to abort."
$stdin.gets

new_file = open(to_file, 'w+'); new_file.write(data)

puts "Alright, all done! Want to read the new file?"
new_file.rewind
$stdin.gets

print data

old_file.close
new_file.close
