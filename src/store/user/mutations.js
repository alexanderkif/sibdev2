export function setUser (state, user) {
  state.user = user
}

export function exitUser (state) {
  state.user = null
}

export function deleteContact (state, contactName) {
  state.user.contacts = state.user.contacts.filter((contact) => contact.name !== contactName)
}

export function updateContact (state, contact) {
  const currentContact = state.user.contacts.filter(c => c.name === contact.name)[0]
  if (currentContact) {
    currentContact.phone = contact.phone
    currentContact.email = contact.email
  } else {
    state.user.contacts.push(contact)
  }
}
