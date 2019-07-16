import CheckProps from 'check-prop-types'

export const checkProps = (component, expectedProps) => {
  const propsErr = CheckProps(component.propTypes, expectedProps, 'props', component.name)
  return propsErr;
}

export const findByTestAttr = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
}