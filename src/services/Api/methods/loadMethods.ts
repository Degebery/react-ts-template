import IMethodsContainer from '../interfaces/IMethodsContainer';
import IMethod from '../interfaces/IMethod';

const initialObject: IMethodsContainer = {};

export default (apiMethods: object) => Object.entries(apiMethods).reduce((first, curr) => {
  const [name, methods] = curr;

  Object.entries(methods).forEach((m) => {
    const [key, value] = m;

    first[`${name}.${key}`] = value as IMethod;
  });

  return first;
}, initialObject);
