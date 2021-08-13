# recycling-sorter
## Final project for Team 13, Deep Learning Track, MIT SureStart Program 2021

This website is a software demo of the AI model we built to classify different types of recycling items. The website will allow a user to upload an image, and then will feed
that image directly into our model, which will use AI to predict what type of recycling the item is (paper, cardboard, plastic, metal, glass, etc). 

Website was created using React.js, and has an embeeded Anvil server page which is linked to a Google Colab document that contains the code for the model.

## Deployed here: https://optimal-stocking.surge.sh/

Important: website only works when the anvil server is running and connected in this Google Colab Notebook: https://colab.research.google.com/drive/1Le5qMNuMhOGi02Tp9DHsPeulkT-qvQ38?usp=sharing. The dataset used is called trashnet which can be downloaded here: https://github.com/garythung/trashnet. Note that the model has around 70% accuracy so there may be errors. To upload another image, refresh the page.
