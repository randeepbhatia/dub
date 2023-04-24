export interface SimpleLinkProps {
  domain?: string;
  key: string;
  url: string;
}

export interface LinkProps {
  id?: string;
  domain: string;
  key: string;
  url: string;
  archived: boolean;
  expiresAt: Date | null;
  password: string | null;

  proxy: boolean;
  title: string | null;
  description: string | null;
  image: string | null;

  ios: string | null;
  android: string | null;

  clicks: number;
  userId: string;

  createdAt: Date;
}

export interface ProjectProps {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  usage: number;
  usageLimit: number;
  plan: "free" | "pro" | "enterprise";
  billingCycleStart?: number;

  // TO DELETE
  ownerUsageLimit?: number;
  ownerExceededUsage?: boolean;

  users?: {
    role: string;
  }[];
}

export interface ProjectWithDomainProps extends ProjectProps {
  domains: DomainProps[];
  primaryDomain: DomainProps;
}

export interface UsageProps {
  usage: number;
  usageLimit: number;
  plan: "free" | "pro" | "enterprise";
  billingCycleStart?: number;
}

export interface UserProps {
  id: string;
  name: string;
  email: string;

  // TO DELETE
  stripeId: string;
  usageLimit: number;

  joinedAt?: Date;
  projects?: { projectId: string }[];
}

export type DomainVerificationStatusProps =
  | "Valid Configuration"
  | "Invalid Configuration"
  | "Pending Verification"
  | "Domain Not Found"
  | "Unknown Error";

export interface RootDomainProps {
  target: string;
  rewrite?: boolean;
}

export interface DomainProps {
  slug: string;
  verified: boolean;
  primary: boolean;
  target?: string;
  type: "redirect" | "rewrite";
  _count?: {
    links: number;
  };
}
