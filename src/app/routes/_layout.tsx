
import { createFileRoute, Outlet } from '@tanstack/react-router';
import LayoutMain from '../layouts/LayoutMain/ui/LayoutMain';

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <LayoutMain> 
      <Outlet /> 
    </LayoutMain>
  );
}