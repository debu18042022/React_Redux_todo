import { Add, Delete, isChecked, Update } from "./Action";

export const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    add: (element) => dispatch(Add(element)),
    del: (element) => dispatch(Delete(element)),
    update: (element, index) => dispatch(Update(element, index)),
    isChecked: (flagValue, index) => dispatch(isChecked(flagValue, index)),
  };
};
