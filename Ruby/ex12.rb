print "Give me a number: "
number = gets.chomp.to_i

bigger = number * 100
puts "A bigger number is #{bigger}."

print "Give me another number: "
another = gets.chomp
number = another.to_i

smaller = number / 100.0
puts "A smaller number is #{smaller}."

print "Give me a dollar amount and I'll give you 10% back: $"
number = gets.chomp.to_f
refund = number / 10

puts refund
