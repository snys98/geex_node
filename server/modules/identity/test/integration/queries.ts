export const loginMutation = `
            mutation login($input: LoginInput!){
              login(input: $input) {
                id
                accessToken
              }
            }
          `;

export const registerMutation = `
            mutation register($input: RegisterInput!){
              register(input: $input) {
                id
                username
                locked
              }
            }`

export const usersQuery = `{
              users {
                id
                username
                locked
              }
            }`;
