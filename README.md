This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

(https://github.com/facebookincubator/create-react-app/edit/master/packages/react-scripts/template/README.md)

# My Flickr Photography Site
---

## Description

This site was created to display all my photos, and eliminate the need for my own back-end. The Flickr Api was used to store photo data and tag data in state. The user can then search all of my photos by tag, or view them in chronological order. The entire app is single page, and the various sections are conditionally rendered. In addition, Google Analytics has been installed to track user interaction, at improve UX and UI. 

This app uses multiple Axios calls. The page renders with an index of all photos in state. When the user clicks on the search tag icon, a call is made to the Flickr tag endpoint, to gather a list of all tags used in the photos. On click, a new call is made to the API, to search photos by tag word, and state is updated. 

When the visitor clicks on the Inspiration nav, the page renders with all favorited photos from other Flickr users.
If they click the About Me section, the page will render with a short Bio, and camera reviews

Clicking on any photo will show a shadowboxed version of the photo along with a caption.


## Deployment

Deployed with Surge

## Built With

* [REACT](https://facebook.github.io/react/) 
* [AXIOS](https://www.npmjs.com/package/axios) 
* [FLICKR API](https://www.flickr.com/services/api/) 

## Bugs

Not a bug per se, but the page would look better with a Masonry layout, to avoid issues inherent in rendering irregularly sized images dynamically, while allowing for a multiple column display. Similarly, images should be scaled down so that the full length is visible on all viewports, so that users do not have to scroll.

In the future, avoid React Materialize, as certain components interfere with click events. It is also limited in customization, and does not respond properly.


## Authors

* **Celine Chadwick** 
