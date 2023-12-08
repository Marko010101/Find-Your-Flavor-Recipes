// import * as model from './model.js';
// import recipeView from './view/recipeView.js';
// import searchView from './view/searchView.js';
// import resultsView from './view/resultsView.js';
// import paginationView from './view/paginationView.js';

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// }

// const controlRecipes = async function () {
//   try {
//     const id = window.location.hash.slice(1);

//     if (!id) return;

//     recipeView.renderSpinner();

//     // 1) Loading recipe
//     await model.loadRecipe(id);

//     // 2) rendering receipe
//     recipeView.render(model.state.recipe);
//   } catch (err) {
//     recipeView.renderError();
//   }
// };

// const controlSearchResults = async function () {
//   try {
//     resultsView.renderSpinner();

//     // 1) Get search query
//     const query = searchView.getQuery();
//     if (!query) return;

//     // 2) Load search results
//     await model.loadSearchResults(query);
//     // 3) Render results
//     resultsView.render(model.state.search.results);

//     // 4) Render initial pagination buttons
//     paginationView.render(model.state.search);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const init = function () {
//   recipeView.addHandlerRender(controlRecipes);
//   searchView.addHandlerSearch(controlSearchResults);
// };
// init();
