export interface NuiCarouselProps {
  carouselName: string,
  options: Record<string, unknown>,
}

export const useNuiCarouselProps = {
  carouselName: {
    type: String,
    required: true,
    default: '',
  },
  options: {
    type: Object,
    required: true,
    default: {},
  },
};
