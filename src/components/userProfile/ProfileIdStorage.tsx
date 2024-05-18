let profileIdCache = BigInt(0);

export const getProfileId = () => {
  return profileIdCache ?? null;
};

export const setProfileId = (profileId: bigint) => {
  profileIdCache = profileId;
};
