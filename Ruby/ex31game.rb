prompt = "> "

puts "Welcome, Traveler! \nYou're about to embark an adventure but we need supplies.\n "
puts "First, how bout you tell me your name?"

print prompt
name = $stdin.gets.chomp
not_a_name = name.to_i

if not_a_name != 0
  puts "Hmmm, that's a funny name, do you have a nickname I can call you?"

  print prompt
  name = $stdin.gets.chomp
  not_a_name = name.to_i

  if not_a_name == "no"
    puts "Ok, well I would like to know your name before we continue. I'll find someone else, sorry."
    abort
  elsif not_a_name == 0
    puts "Cool nickname! Nice to meet you #{name}!\n "
  elsenot_a_name == 0
    puts "Hmmmmm, you don't seem to want to play by the rules so i'll find someone else."
    abort
  end

else
  puts "Awesome name! Nice to meet you #{name}."

end

puts "Alright #{name}, lets pack a couple items."
puts """Pick only two. What's your first pick? Just need the number.
1. Gun + Ammo
2. Food
3. Lighter + Knife
"""

print prompt
first_item = $stdin.gets.chomp.to_i

puts "Ok, and your second item?"

print prompt
second_item = $stdin.gets.chomp.to_i

items = [first_item, second_item]

if items == [1, 2] || items == [2, 1]
  puts "Nice choice, can never go wrong with some guns and food!"
elsif items == [2, 3] || items == [3, 2]
  puts "I like your style, who needs guns anyways!"
elsif items == [1, 3] || items == [3, 1]
  puts "Gonna find your own food, huh? I like it!"
else
  puts "You sure you picked from the supplies?"
end

puts "Alright, I think we're all set! Shall we begin our adventure? (Y/N)"

print prompt
answer = $stdin.gets.chomp.downcase

if answer == "yes" || answer == "y"
  puts "Woohoo! Lets go!!!"
elsif answer == "no" || answer == "n"
  puts "Aww ok, well we can leave later!"
  abort
else
  puts "Huh? did you say yes or no?"
  abort
end

puts "Alright, off we go but we ran into a fork in the road"
