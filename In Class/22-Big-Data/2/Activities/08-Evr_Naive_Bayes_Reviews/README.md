# Classifying Yelp Reviews

In this activity, you will use a Naive Bayes classifier and NLP data processing pipeline to classify reviews from Yelp as either positive or negative.

## Instructions

1. Read in the file containing Yelp reviews.

2. Create a column that adds the length of the review as a feature.

3. Create a list of transformations to be applied in the pipeline:

   * Change positive and negative to an index.

   * Tokenize the review.

   * Filter out stop words.

   * Calculate term frequency using `HashingTF`.

   * Calculate TF-IDF.

4. Create a feature vector containing the output from the IDFModel (the last stage in the pipeline) and the length.

   * Set up the pipeline and then fit it to the data.

   * Create training and testing data.

   * Create and fit the Naive Bayes model to the training data.

   * Predict outcomes using the testing set.

   * Use `MulticlassClassificationEvaluator` to evaluate the model on the testing set.

## References

“From Group to Individual Labels using Deep Features,” Kotzias et. al,. KDD 2015. https://archive.ics.uci.edu/ml/datasets/Sentiment+Labelled+Sentences

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
