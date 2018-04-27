import { MUSIC_KEYS, MUSIC_KEY_LABELS } from '../../constants/music-keys';

export default React => () => {
  const keyOptions = new Array();

  for (let musicKey in MUSIC_KEYS) {
    const keyOption = (
      <option key={MUSIC_KEYS[musicKey]}>
        { MUSIC_KEY_LABELS[musicKey].natural }
      </option>
    );
    keyOptions.push(keyOption);
  }

  const SelectKeyElement = () => {
    return (
      <select>
        { keyOptions }
      </select>
    );
  }

  const SelectAlteration = () => {
    return (
      <select>
        <option>None (natural)</option>
        <option>Sharp (#)</option>
        <option>Flat (&#x266D;)</option>
      </select>
    );
  }

  return (
    <section>
      <h4>Select key and alteration</h4>
      <SelectKeyElement />
      <SelectAlteration />
    </section>
  );
}