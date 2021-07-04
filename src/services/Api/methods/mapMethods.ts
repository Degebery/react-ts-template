import IMethodsContainer from '../interfaces/IMethodsContainer';

const initialObject: IMethodsContainer = {};

export default (category: string, methods: object) => {
  return Object.entries(methods).reduce((first, curr) => {
    const [key, value] = curr;

    first[`${category}.${key}`] = value;

    return first;
  }, initialObject);
};
