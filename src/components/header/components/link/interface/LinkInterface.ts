export interface LinkInterface {
  name: string;
  path: string;
  section?: React.MutableRefObject<null>;
  scrollToSection: (section: React.MutableRefObject<null> | undefined) => void;
}
