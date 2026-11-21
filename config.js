// Configuração da sincronização na nuvem (Supabase).
// Enquanto url e anonKey estiverem vazios, o app funciona só neste aparelho e a área de login fica oculta.
// A anonKey é pública por natureza: o que protege os dados é a regra de acesso (RLS) do banco, que só deixa
// cada pessoa ler e gravar o próprio progresso. Veja SETUP-NUVEM.md.
// PROTÓTIPO MODO: nuvem desligada de propósito, para nunca tocar no progresso real.
const CLOUD = {
  url: '',
  anonKey: '',
};
