export default ({
  type: contactType,
  name,
  nicknames,
  organizations,
  phones,
  emails,
  postals,
  websites,
  relations,
  socialProfiles,
  ims,
  birthday,
  nonGregorianBirthday,
  dates,
  notes,
  photos,
  // sipAddresses,
  // identities,
}) => {
  const {
    // formattedName,

    prefix: namePrefix,
    givenName,
    middleName,
    familyName,
    suffix: nameSuffix,

    previousFamilyName,

    // formattedPhoneticName

    phoneticGivenName,
    phoneticMiddleName,
    phoneticFamilyName,
  } = name || {};

  const {
    // label,
    company: organizationName,
    title: jobTitle,
    department: departmentName,
    // jobDescription,
    // symbol,
    phoneticCompany: phoneticOrganizationName,
    // officeLocation,
  } = organizations && organizations[0] || {};

  const nickname = nicknames && nicknames[0] && nicknames[0].name;
  const imageData = photos && photos[0] && photos[0].photo;
  const note = notes && notes[0] && notes[0].note;

  return {
    contactType,

    namePrefix,
    givenName,
    middleName,
    familyName,
    previousFamilyName,
    nameSuffix,

    nickname,

    organizationName,
    departmentName,
    jobTitle,

    phoneticGivenName,
    phoneticMiddleName,
    phoneticFamilyName,
    phoneticOrganizationName,

    note,
    imageData,

    phoneNumbers: phones && phones.map(({
      label,
      number: value,
    }) => ({
      label,
      value,
    })),

    emailAddresses: emails && emails.map(({
      label,
      address: value,
      // displayName,
    }) => ({
      label,
      value,
    })),

    postalAddresses: postals && postals.map(({
      label,
      // formattedAddress,
      street,
      subLocality,
      city,
      subAdministrativeArea,
      state,
      postalCode,
      country,
      isoCountryCode,
    }) => ({
      label,
      street,
      subLocality,
      city,
      subAdministrativeArea,
      state,
      postalCode,
      country,
      isoCountryCode,
    })),

    urlAddresses: websites && websites.map(({
      label,
      url: value,
    }) => ({
      label,
      value,
    })),

    contactRelations: relations && relations.map(({
      label,
      name: value,
    }) => ({
      label,
      value,
    })),

    socialProfiles: socialProfiles && socialProfiles.map(({
      label,
      url: urlString,
      username,
      userId: userIdentifier,
      service,
    }) => ({
      label,
      urlString,
      username,
      userIdentifier,
      service,
    })),

    instantMessageAddresses: ims && ims.map(({
      label,
      username,
      service,
    }) => ({
      label,
      username,
      service,
    })),

    birthday,

    nonGregorianBirthday,

    dates: dates && dates.map(({
      label,
      year,
      month,
      day,
    }) => ({
      label,
      year,
      month,
      day,
    })),
  };
};

/*
{
  contactType,

  namePrefix,
  givenName,
  middleName,
  familyName,
  previousFamilyName,
  nameSuffix,
  nickname,

  organizationName,
  departmentName,
  jobTitle,

  phoneticGivenName,
  phoneticMiddleName,
  phoneticFamilyName,
  phoneticOrganizationName,

  note,
  imageData,

  phoneNumbers: [{
    label,
    value,
  }],

  emailAddresses: [{
    label,
    value,
  }],

  postalAddresses: [{
    label,
    street,
    subLocality,
    city,
    subAdministrativeArea,
    state,
    postalCode,
    country,
    isoCountryCode,
  }],

  urlAddresses: [{
    label,
    value,
  }],

  contactRelations: [{
    label,
    value,
  }],

  socialProfiles: [{
    label,
    urlString,
    username,
    userIdentifier,
    service,
  }],

  instantMessageAddresses: [{
    label,
    username,
    service,
  }],

  birthday: {
    year,
    month,
    day,
  },

  nonGregorianBirthday: {
    year,
    month,
    day,
  },

  dates: [{
    label,
    year,
    month,
    day,
  }],
},
*/