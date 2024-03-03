/**
 * Returns the plural or singular form of a noun based on the count.
 *
 * @template Count - The type of the count parameter.
 * @template Noun - The type of the noun parameter.
 * @template Plural - The type of the plural parameter (optional).
 * @param count - The count of the noun.
 * @param noun - The singular form of the noun.
 * @param plural - The plural form of the noun (optional).
 * @returns The plural form of the noun if the count is greater than 1, otherwise the singular form.
 */
export function pluralize<
  Count extends number,
  Noun extends string,
  Plural extends string = `${Noun}s`,
>(count: Count, noun: Noun, plural?: Plural): Count extends 1 ? Noun : Plural {
  return (count === 1 ? noun : plural ?? `${noun}s`) as Count extends 1
    ? Noun
    : Plural;
}
