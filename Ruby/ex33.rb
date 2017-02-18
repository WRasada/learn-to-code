# def number_test(num, inc)
#   i = 0
#   numbers = []
#
#   while i < num
#     puts "At the top i is #{i}"
#     numbers.push(i)
#
#     i += inc
#     puts "Numbers now: ", numbers
#     puts "At the bottom i is #{i}"
#   end
#
#   puts "The numbers: "
#
#   numbers.each {|num| puts num }
# end
#
# puts "Give me a number"
# number = gets.chomp.to_i
#
# puts "Now give me a number to increment it by each time"
# increment = gets.chomp.to_i
#
# number_test(number, increment)

def number_test(num, inc)
  i = 0
  numbers = []

  (i...num).step(inc) do |i|
    puts "At the top i is #{i}"
    numbers.push(i)

    puts "Numbers now: ", numbers
    puts "At the bottom i is #{i + inc}"
  end

  puts "The numbers: "
  numbers.each {|num| puts num }
end

puts "Give me a number"
number = gets.chomp.to_i

puts "Now give me a number to increment it by each time"
increment = gets.chomp.to_i

number_test(number, increment)
