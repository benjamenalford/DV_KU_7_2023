name = "Kyle"
names = ["Kyle", "Ben", "Mark", "Matt"]
print(names)
# print(names[0])
print(len(names))

# if(name in names):
#     print(f"{name} is in {names}")
# else:
#     print(f"{name} is not in {names}")

names.append("hoobastank")
print(names, len(names))

print(names.index("Mark"),names[2])

names.remove("Ben")
print(names, len(names))
