// export class Dictionary<TKey = string, TValue = any> extends Array<TValue> {
//   private _entries: Record<string, TValue>;
//   constructor(entries?: Record<string, TValue> | null) {
//     super();
//     this._entries = entries ?? {};
//     return new Proxy(this, {
//       get(target, prop: string | symbol) {
//         if (typeof prop === 'string' && isNaN(Number(prop))) {
//           if (Array.prototype[prop]) {
//             return Object.entries(target._entries).map(x => x[1])[prop];
//           }
//           return target._entries[prop];
//         } else {
//           return target[prop];
//         }
//       },
//       set(target, prop: string, value: TValue) {
//         if (typeof prop === 'string' && isNaN(Number(prop))) {
//           target._entries[prop] = value;
//         }
//         else {
//           target[prop] = value;
//         }
//         return true;
//       }
//     });
//   }
// }
