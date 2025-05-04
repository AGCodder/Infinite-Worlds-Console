import matplotlib.pyplot as plt
import numpy as np
import random

# Define the target average rating
Total_rate = 2.5  # This is adjustable
max_users = 300    # Maximum number of ratings

# Function to generate ratings that meet the target average
def generate_ratings(target_average, max_users):
    while True:
        # Randomly generate number of 5-star and 4-star ratings
        x5 = random.randint(0, max_users)  # 5-star ratings
        x4 = random.randint(0, max_users - x5)  # 4-star ratings
        
        # Calculate remaining users for 3-star, 2-star, and 1-star
        remaining_users = max_users - (x5 + x4)

        # If there are no remaining users, continue the loop
        if remaining_users < 0:
            continue

        # Randomize remaining ratings for 3-star, 2-star, and 1-star
        x3 = random.randint(0, remaining_users)
        x2 = random.randint(0, remaining_users - x3)
        x1 = remaining_users - (x3 + x2)

        # Calculate total ratings and the weighted score
        N = x5 + x4 + x3 + x2 + x1
        S = 5 * x5 + 4 * x4 + 3 * x3 + 2 * x2 + 1 * x1

        # Calculate the average rating
        average_rating = S / N if N > 0 else 0

        # Check if the average rating meets the target
        if round(average_rating, 1) == round(target_average, 1):
            return x5, x4, x3, x2, x1, N, average_rating

# Get randomized ratings
x5, x4, x3, x2, x1, N, average_rating = generate_ratings(Total_rate, max_users)

# Print the ratings
print(f"5-star ratings: {x5}")
print(f"4-star ratings: {x4}")
print(f"3-star ratings: {x3}")
print(f"2-star ratings: {x2}")
print(f"1-star ratings: {x1}")
print(f"Total ratings: {N}")
print(f"Final Average Rating: {average_rating:.2f}")

# Prepare data for the bar chart
y = np.array([x1, x2, x3, x4, x5])
x_labels = ["1", "2", "3", "4", "5"]

# Create a figure with a black background
plt.figure(facecolor='black')

# Create horizontal bar chart with yellow bars
bars = plt.barh(x_labels, y, color='yellow', height=0.3)

# Add labels in front of the bars
for bar in bars:
    plt.text(bar.get_width(), bar.get_y() + bar.get_height()/2, f'{int(bar.get_width())}', 
             va='center', ha='left', color='white', fontsize=10)

# Change the axes background color to black
plt.gca().set_facecolor('black')

# Set y-axis labels and hide x-axis
plt.yticks(color='white')
plt.xticks([])  # Hide the x-axis ticks

# Save the plot as a PNG file
plt.savefig('d:/Web Development Course/Infinite Worlds Console/ratings_chart.png', bbox_inches='tight', facecolor='black')

# Show the plot
plt.show()

