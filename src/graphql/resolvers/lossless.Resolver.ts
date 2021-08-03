import { MutationValidateArgs, QueryBalanceArgs, RequireFields, Resolvers } from '../../generated/graphql';
import { getBalance } from '../../contract-balance';
import { verify } from '../../message-signature';

export const resolvers: Resolvers = {
    Query: {
        async balance(args: RequireFields<QueryBalanceArgs, never>): Promise<number> {
            var balance = await getBalance(args.address);
            return balance;
        }
    },
    Mutation: {
        async validate(args: MutationValidateArgs ): Promise<boolean> {
            var verified = await verify(args.address, args.message, args.signature);
            return verified;
        }
    },
}