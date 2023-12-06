import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react'

const appId = "8fde102f341b4b05a6f65f62a9ddcd94"
const token = "007eJxTYNhW1DLny8Okm3HHrl8QjBZXSBMImLBnS51jtzdzd4ByrJcCg0VaSqqhgVGasYlhkkmSgWmiWZqZaZqZUaJlSkpyiqWJhlp+akMgI4Oy5i0WRgYIBPHZGFzy81NyUhkYAFdXHnw="

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Doodle"