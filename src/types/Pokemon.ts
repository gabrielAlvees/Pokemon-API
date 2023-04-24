export interface IPokemon {
  url: string;
  id: string;
  name: string;
  weight: number;
  order: number;
  sprites: {
    front_default: string;
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string;
          }
        }
      }
      "generation-vii": {
        "ultra-sun-ultra-moon": {
          front_default: string;
        }
      }
    }
  }
  types: {
    0: {
      type: {
        name: string;
      }
    }
    1: {
      type: {
        name: string;
      }
    }
  }
}