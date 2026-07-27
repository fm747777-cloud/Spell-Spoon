// Web Audio API Ambient Sound Synthesizer for Spell & Spoon
class AmbientSoundSynth {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timer: number | null = null;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playMagicalChime() {
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6 pentatonic spell scale

    notes.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 1.2);
    });
  }

  public startAmbientLoop() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.playMagicalChime();

    this.timer = window.setInterval(() => {
      if (this.isPlaying) {
        this.playMagicalChime();
      }
    }, 12000);
  }

  public stopAmbientLoop() {
    this.isPlaying = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  public toggleAmbientLoop(): boolean {
    if (this.isPlaying) {
      this.stopAmbientLoop();
      return false;
    } else {
      this.startAmbientLoop();
      return true;
    }
  }
}

export const soundSynth = new AmbientSoundSynth();
