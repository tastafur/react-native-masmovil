import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate({routeName, params, action = undefined, key = undefined}) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      action,
      key
    })
  );
}

function back(key = undefined, immediate = undefined) {
  _navigator.dispatch(
    NavigationActions.back({
      key,
      immediate
    })
  );
}

// add other navigation functions that you need and export them

export default {
  setTopLevelNavigator,
  navigate,
  back
};
