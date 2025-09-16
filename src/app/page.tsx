import { Metadata } from 'next';
import ElevateBusinessCoachingPage from './ElevateBusinessCoachingPage';

export const metadata: Metadata = {
  title: ' Elevate ',
 
  openGraph: {
    title: ' Elevate ',
  }
}

export default function Page() {
  return <ElevateBusinessCoachingPage />
}