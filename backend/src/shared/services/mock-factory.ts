import { Class } from "../util/types";
import { Callback } from "typeorm";

export class MockFactory {
  static mock<T extends NonNullable<unknown>>(
    classType: Class<T>,
    idGenerator?: Callback<T>,
    customizer?: Callback<T>,
  ): void | T {
    const instance = new classType();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (instance.constructor._fields) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const fieldNames = instance.constructor._fields;
      fieldNames.forEach((fieldName: string) => {
        const mockValue = Reflect.getMetadata("mockValue", instance, fieldName);
        if (mockValue !== undefined) {
          (instance as any)[fieldName] = mockValue;
        } else {
          const fieldType = Reflect.getMetadata(
            "design:type",
            instance,
            fieldName,
          );
          const mockGenerator = MockFactory.getMockGenerator(fieldType);
          if (mockGenerator) {
            (instance as any)[fieldName] = mockGenerator();
          }
        }
      });
    }

    if (idGenerator)
      (instance as any).id = `${classType.name.toLowerCase()}_${idGenerator()}`;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return customizer ? customizer(instance) : instance;
  }

  static getMockGenerator(type: any) {
    new Map<any, () => any>();
    return MockFactory.mockGenerators.get(type);
  }

  static mockGenerators = new Map<any, () => any>();

  static initialize() {
    MockFactory.mockGenerators.set(String, () => "Mock String");
    MockFactory.mockGenerators.set(Number, () => 0);
    MockFactory.mockGenerators.set(Boolean, () => false);
    MockFactory.mockGenerators.set(Date, () => new Date());
    MockFactory.mockGenerators.set(Array, () => []);
    MockFactory.mockGenerators.set(Object, () => ({}));
    MockFactory.mockGenerators.set(Map, () => new Map());
    MockFactory.mockGenerators.set(Set, () => new Set());
    MockFactory.mockGenerators.set(WeakMap, () => new WeakMap());
    MockFactory.mockGenerators.set(WeakSet, () => new WeakSet());
    MockFactory.mockGenerators.set(Symbol, () => Symbol("mock"));
    MockFactory.mockGenerators.set(Promise, () => Promise.resolve());
    MockFactory.mockGenerators.set(Function, () => () => {});
    MockFactory.mockGenerators.set(RegExp, () => /(?:)/);
    MockFactory.mockGenerators.set(Uint8Array, () => Uint8Array.from([]));
    MockFactory.mockGenerators.set(Uint16Array, () => Uint16Array.from([]));
    MockFactory.mockGenerators.set(Uint32Array, () => Uint32Array.from([]));
    MockFactory.mockGenerators.set(Int8Array, () => Int8Array.from([]));
    MockFactory.mockGenerators.set(Int16Array, () => Int16Array.from([]));
    MockFactory.mockGenerators.set(Int32Array, () => Int32Array.from([]));
    MockFactory.mockGenerators.set(Float32Array, () => Float32Array.from([]));
    MockFactory.mockGenerators.set(Float64Array, () => Float64Array.from([]));
  }
}

MockFactory.initialize();
