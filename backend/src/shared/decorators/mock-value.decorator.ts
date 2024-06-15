import "reflect-metadata";

export function MockValue(mockValue?: any) {
  return (target: any, key: string) => {
    if (!target.constructor._fields) {
      target.constructor._fields = [];
    }
    target.constructor._fields.push(key);
    Reflect.defineMetadata("mockValue", mockValue, target, key);
  };
}
