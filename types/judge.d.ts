export interface FnType {
  version: string,
  type(obj: any): string
  isWindow(obj): boolean,
  isDocument(obj): boolean,
  isArray(value): boolean,
  isObject(obj): boolean,
  isObjectLike(value): boolean,
  isEmptyObject(obj: object): boolean,
  isPlainObject(obj: object): boolean,
  include(str: string, subStr: string): boolean,
  isArrayLike( obj: any ): boolean,
  isArrayLikeObject(value: object): boolean,
  kernel(): string,
  platform(): string,
  iosDevice(): string,
  iosVersion(): string,
  androidVersion(): string,
  isMobile(): boolean,
  isPc(): boolean,
  isExist(value: any): boolean,
  isNull(value: any): boolean,
  isUndefined(value: any): boolean,
  isNumber(num: any): boolean,
  lt(val1,val2): boolean,
  inArray(val,arr): boolean,
  isTouchDevice(): boolean,
  email(num): boolean,
  hasLowerCase(str): boolean,
  hasNumber(num: string): boolean,
  hasCapital(str: string):boolean,
  isBrowser(): boolean,
  isFunction(fn): boolean,
  isEqual(val1, val2): boolean,
  isLength(value): boolean,
  size(val): number,
  isHttps(url: string): boolean,
  isUnique(array): boolean,
  isString(str): boolean,
  isInt(num): boolean,
  isJson(json): boolean,
  hasClass(element,className): boolean,
  isError(value): boolean,
  isChar(value): boolean,
  isArguments(value): boolean,
  isEmpty(value): boolean,
  qqNumber(num): boolean,
  phoneNumber(num): boolean,
  isLetter(str): boolean,
  isAlpha(str): boolean,
  includeChinese(ch): boolean,
  onlyChinese(ch): boolean,
  onlyNumber(num): boolean,
  isElement(obj): boolean,
  isSet(value): boolean,
  isRegExp(reg): boolean,
  idNumber(num): boolean,
  isEven(num): boolean,
  isOdd(num): boolean,
  min(a, b): number,
  hasHash(url): boolean,
  getHash(url): string,
  has(obj, key): boolean,
  zipCode(code): boolean,
  isChromium(): boolean,
  isOnline(): boolean,
  hasSpecialChar(str): boolean,
  position(element, parent) : object,
  isNativeFn(fn): boolean,
  strLength(str): number,
  isLeapYear(year): boolean,
  isDate(val): boolean,
  isUrl(str): boolean,
  isNumberic(num): boolean
}
