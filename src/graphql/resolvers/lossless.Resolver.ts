import { MutationValidateArgs, QueryBalanceArgs, Resolvers } from '../../generated/graphql';
import { getBalance } from '../../contract-balance';
import { verify } from '../../message-signature';

export const resolvers: Resolvers = {
    Query: {
        async balance(parent: {}, args: QueryBalanceArgs): Promise<number> {
            var balance = await getBalance(args.address as string);
            return balance;
        }
    },
    Mutation: {
        async validate(parent: {}, args: MutationValidateArgs): Promise<boolean> {
            var verified = await verify(args.address, args.message, args.signature);
            return verified;
        }
    },
}