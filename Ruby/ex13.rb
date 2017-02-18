first, second, third = ARGV

puts "Your first variable is: #{first.to_i}"
puts "Your second variable is: #{second}"
puts "Your third variable is: #{third}"

print "Whats your name?: "
name = $stdin.gets.chomp

puts name
