"use client"

import { 
  Authenticated, 
  Unauthenticated,
  ConvexReactClient,
  AuthLoading, 
} from "convex/react";
import { ClerkProvider, useAuth, UserButton } from "@clerk/nextjs"
import { ConvexProviderWithClerk} from "convex/react-clerk"
import { ThemeProvider } from "./theme-provider";
import { UnauthenticatedView } from "../features/components/auth/unauthenticated-view";
import { AuthLoadingView } from "../features/components/auth/auth-loading-view";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export const Providers  = ({children} : {children: React.ReactNode }) => {
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk client={convex} useAuth = {useAuth}>
                <ThemeProvider          
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Authenticated>
            <UserButton />
            {children}
          </Authenticated>
          <Unauthenticated>
            <UnauthenticatedView />
          </Unauthenticated>
          <AuthLoading>
            <AuthLoadingView />
          </AuthLoading>
        </ThemeProvider>
            </ConvexProviderWithClerk>
        </ClerkProvider>

    )
}