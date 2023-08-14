import pandas as pd

# The path to our CSV file
file = "Resources/CrowdfundingData.csv"

# Read our Crowdfunding data into pandas
df = pd.read_csv(file)

# Get a list of all of our columns for easy reference
columns = df.columns

# Extract "name", "goal", "pledged", "outcome", "country", "staff_pick", "backers_count", and "spotlight"
df = df[["name", "goal", "pledged", "outcome", "country", "staff_pick", "backers_count",  "spotlight"]]

# Remove projects that made no money at all
df =df.loc[df['pledged'] >0]

# Collect only those projects that were hosted in the US
# Create a list of the columns
# Create a new df for "US" with the columns above. 
df_us =df.loc[df['country'] =="US"]

# Create a new column that finds the average amount pledged to a project
df_us['average pledge']= df_us['pledged']/df_us['backers_count'] 

# First convert "average_donation", "goal", and "pledged" columns to float
# Then Format to go to two decimal places, include a dollar sign, and use comma notation
df_us['average pledge'] = df_us['average pledge'].map("${:,.2f}".format)
df_us['goal'] = df_us['goal'].map("${:,.2f}".format)
df_us['pledged'] = df_us['pledged'].map("${:,.2f}".format)
# Calculate the total number of backers for all US projects
df_us.groupby('country')['backers_count'].sum()
# Calculate the average number of backers for all US projects
df_us.groupby('country')['backers_count'].mean()
# Collect only those US campaigns that have been picked as a "Staff Pick"
df_us.loc[df_us["staff_pick"] ]
# Group by the outcome of the campaigns and see if staff picks matter (Seems to matter quite a bit)
df_us.groupby(['outcome','staff_pick']).count()[['name']].rename(columns={'name':'total'}).reset_index(drop=False).to_csv("test.csv")
