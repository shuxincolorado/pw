var push = require('web-push')

let vapidKeys = {
    publicKey: 'BGe68kOCIHrYnc9miVIHuz1SMGKg_IsTP0zxu0ehyJhmDYfmmezBjlgJLmTd4waZ8qG_8jmxRDMhM7Y56e-J66I',
    privateKey: 'SWlWMM4AVamPRd93UpAXSDEhbOtu0GiT9vUaCquRaDY'
  }

console.log(vapidKeys);

push.setVapidDetails('mailto:shuxin.yin@cccs.edu',vapidKeys.publicKey, vapidKeys.publicKey)

let sub = {};
push.sendNotification(sub, 'test message')