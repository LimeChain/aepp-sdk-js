/*
 * ISC License (ISC)
 * Copyright (c) 2018 aeternity developers
 *
 *  Permission to use, copy, modify, and/or distribute this software for any
 *  purpose with or without fee is hereby granted, provided that the above
 *  copyright notice and this permission notice appear in all copies.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 *  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 *  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 *  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 *  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 *  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 *  PERFORMANCE OF THIS SOFTWARE.
 */

import adjectives from './adjectives'
import animals from './animals'
import { decodeBase58Check } from '../../crypto'

export default address => {
  const bytes = decodeBase58Check(address.split('$')[1])
  let entropy = bytes.readUInt32BE(bytes.length - 4)
  const words = []
  words.push(adjectives[entropy % adjectives.length])
  entropy = Math.floor(entropy / adjectives.length)
  words.push(adjectives[entropy % adjectives.length])
  entropy = Math.floor(entropy / adjectives.length)
  words.push(animals[entropy % animals.length])
  return words.join(' ')
}
