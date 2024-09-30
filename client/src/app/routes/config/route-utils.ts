export function getRouteParams<T extends string>(params: T[]): Record<T, string> {
  const paramObject: Record<T, string> = {} as Record<T, string>;

  params.forEach((param) => {
    paramObject[param] = `:${param}`;
  });

  return paramObject;
}
