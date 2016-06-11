import Unsplash from 'unsplash-js/native';
import { APPLICATION_ID, SECRET, CALLBACK_URL } from './constants';

const unsplash = new Unsplash({
    applicationId: APPLICATION_ID,
    secret: SECRET,
    callbackUrl: CALLBACK_URL,
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "read_user",
    "write_user",
    "read_photos",
    "write_photos"
]);

export default unsplash;
