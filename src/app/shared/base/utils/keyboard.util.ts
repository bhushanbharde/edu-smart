import { KEYBOARD_KEYS } from '../constants';

export function isEnterKey(event: KeyboardEvent): boolean {
  return event.key === KEYBOARD_KEYS.ENTER;
}

export function isEscapeKey(event: KeyboardEvent): boolean {
  return event.key === KEYBOARD_KEYS.ESCAPE;
}
